# Fix Persian Datepicker & Dashboard Calendar & Adding Date Events Data

jquery.ui.datepicker

## intro

In this method we will change the content of the mentioned library so that we don’t have to change the content of the pages and load the scripts and links.

### 1. Fix Persian Datepicker with JalaliDatepicker

---

### JavaScript Section

- Copy `jquery.ui.datepicker-cc.js` and `jquery.ui.datepicker-cc-fa.js`
- In the root of the project (`IstgOfficeAutomation`) go to `/Scripts/lib/jquery.ui/` or `workflow/Uniform/js/` where `jquery.ui.datepicker-cc.js` and `jquery.ui.datepicker-cc-fa.js` exist paste the copied files.

### CSS Section

- Open `jalalidatepicker.min.css` with **Notepad** or **Notepad++** and copy its content and paste it at the end of a CSS file that loads in every page or desired page. for instance you can add these CSS content to `/Content/template/template.css` or in older versions go to this path `workflow\Uniform\css\redmond` find the file `jquery.ui.custom.css`.

**Note**: The file you choose varies from one version to another. you can inspect the page using `F12` and inspect the CSS requests in `network` tab.

### 2. Update dashboard’s calendar

- Copy `dashboard-widget-calender` files `component.js` , `style.css` , `template.html`
- Paste in this path `\workflow\Uniform\Scripts\components\dashboard\widgets\dashboard-widget-calender`

### 3. Adding Date Events Data

![image](https://github.com/user-attachments/assets/fc116c5b-4b4e-47de-b61d-d1986dde042c)


If the events are not shown on the dashboard calendar there's a chance that the `DateEvents` table is empty.
If it's the case you can insert the events with this sql query.

- In Sql Server Management Studio, execute `dbo.DateEvents.Table.sql`.

