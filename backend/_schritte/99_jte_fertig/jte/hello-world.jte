<html lang="en">
    <head>
        <title>Hello HTMX</title>
        <script src="/htmx/htmx-1.9.10.min.js"></script>

        <style>
          body {
            font-size: 2rem;
            font-family: barlow, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
          }

          li {
            margin-bottom: 0.8rem;
          }
        </style>
    </head>
    <body>

        <h1>Hello HTMX</h1>

        <%-- hxhw --%>
        <label>
            <input type="checkbox"
                   hx-trigger="change"
                   hx-get="/hello-world"
                   hx-target="#more-info"

                   />
            I want to know more!
        </label>

        <div id="more-info"></div>
    </body>
</html>