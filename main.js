const changelog_content = document.body.querySelector("#changelog-content");

const logs = changelogs;

for (var i in logs.reverse()) {
    function henkan() {
        switch (logs[i].type) {
            case "repair":
                type = "更新"
                break;
            case "new":
                type = "追加"
                break
            default:
                type = ""
                break;
        }
        return type;
    }
    const div = document.createElement("div");
    div.id = "log_content" + String(i);
    div.style = "padding: 3px 0;margin: 2px 5px;";
    const p1 = document.createElement("p");
    p1.textContent = logs[i].year + "/" + logs[i].month + "/" + logs[i].day + ":" + henkan();
    p1.style = "margin: 0 0;";
    const p2 = document.createElement("p");
    p2.textContent = logs[i].detail;
    p2.style = "margin: 0 0;text-wrap: stable;";
    div.appendChild(p1);
    div.appendChild(p2);
    changelog_content.appendChild(div);
}
