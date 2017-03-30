module.exports = {
    "renderDigitsOrdinal": function anonymous(n) {
        if (n < 0) return "ke−" + this.renderNumber(-n, "#,##0");
        if (n >= 0) return "ke" + this.renderNumber(n, "#,##0")
    }
}