define([
  "text!components/dashboard/widgets/dashboard-widget-calender/template.html",
  "css!components/dashboard/widgets/dashboard-widget-calender/styles.css",
  "services/dashboardService",
], function (template, styles, dashboardService) {
  Vue.component("dashboard-widget-calender", {
    template: template,
    props: ["value"],

    data() {
      const [year, month, day] = new Date()
        .toLocaleDateString("fa-IR-u-nu-latn")
        .split("/")
        .map(Number);

      return {
        i18n: window.i18n,
        currentYear: year,
        currentMonth: month,
        currentDay: day,
        currentMonthEvents: [],
        currentYearHolidays: [],
        calendarContainerId: "persistent-jalali-calendar-container",
        selectedDate: null,
        hiddenInput: null,
        timeout: 120,
        monthEvents: [],
      };
    },

    mounted() {
      this.loadMonthEvents(this.currentYear, this.currentMonth);
      this.initPersistentCalendar();
      setTimeout(this.setEvents, this.timeout);
    },

    methods: {
      initPersistentCalendar() {
        this.createCalendarContainer();
        this.createHiddenInput();
        this.setupDatepickerOptions();
        this.showAndAttachCalendar();
        this.hiddenInput.addEventListener("initdatechange", () => {
          const { month, year } = pjDatepicker.initDate;
          this.loadMonthEvents(year, month);
          this.setEvents();
        });
      },

      createCalendarContainer() {
        let container = document.getElementById(this.calendarContainerId);
        if (!container) {
          container = document.createElement("div");
          Object.assign(container.style, {
            position: "relative",
            zIndex: "1000",
            width: "100%",
            height: "auto",
            overflow: "visible",
          });
          container.id = this.calendarContainerId;
          this.$el.appendChild(container);
        }
      },

      createHiddenInput() {
        const inputId = "persistent-jalali-calendar-input";
        this.hiddenInput = document.getElementById(inputId);
        if (!this.hiddenInput) {
          this.hiddenInput = document.createElement("input");
          Object.assign(this.hiddenInput, {
            type: "hidden",
            id: inputId,
          });
          this.hiddenInput.classList.add("calender");
          document
            .getElementById(this.calendarContainerId)
            .appendChild(this.hiddenInput);
        }

        this.hiddenInput.addEventListener("change", (event) => {
          this.selectedDate = event.target.value;
          console.log("Selected date:", this.selectedDate);
          setTimeout(this.setEvents, this.timeout);
        });
      },

      setupDatepickerOptions() {
        jalaliDatepicker.updateOptions({
          zIndex: 1000,
          separatorChars: { date: "/" },
          hideAfterChange: false,
          autoHide: false,
          container: ".calender",
          autoShow: true,
          showTodayBtn: false,
          showEmptyBtn: false,
          showCloseBtn: false,
          isDashboard: true,
          // useDropDownYears: false,
          dayRendering: ({ inAfterMonth, inBeforeMonth }) => {
            return {
              isValid: !(inAfterMonth || inBeforeMonth),
            };
          },
        });
      },

      showAndAttachCalendar() {
        setTimeout(() => {
          jalaliDatepicker.show(this.hiddenInput);
          const calendarEl = document.querySelector(".jdp-container");
          if (calendarEl) {
            Object.assign(calendarEl.style, {
              position: "static",
              visibility: "visible",
              display: "block",
            });
            document
              .getElementById(this.calendarContainerId)
              .appendChild(calendarEl);
          }
        }, this.timeout);
      },

      loadMonthEvents(year, month) {
        dashboardService.GetMonthEvents(year, month).success((response) => {
          this.$set(this, "currentMonthEvents", response.d.Result);
          this.setEvents();
        });
      },

      setEvents() {
        const { month, year } = pjDatepicker.initDate;

        document
          .querySelectorAll(".jdp-day:not(.not-in-month)")
          .forEach((el) => {
            const day = parseInt(el.innerHTML);
            const matches = this.findEvents(year, month, day);
            if (matches.length > 0) {
              const eventDescriptions = matches
                .map((e) => e.Description)
                .join(", ");
              el.setAttribute("title", eventDescriptions);
              el.classList.add("has-event");

              matches
                .filter((e) => e.IsHoliday)
                .forEach((match) => {
                  el.classList.add("holly-day");
                });

              el.addEventListener("click", () => {});
            }
          });
      },

      findEvents(year, month, day) {
        return this.currentMonthEvents.filter(
          (e) => e.Year == year && e.Month == month && e.Day == day
        );
      },
    },
  });
});
