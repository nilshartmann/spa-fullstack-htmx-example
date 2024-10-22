<html lang="en">
    <head>
        <title>Hello HTMX</title>
        <script src="https://unpkg.com/htmx.org@2.0.0/dist/htmx.min.js"></script>
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