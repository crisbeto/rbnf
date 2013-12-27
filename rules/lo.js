{
    "renderDigitsOrdinal": function anonymous(n) {
        if (n < 0) return "ที่−" + this.renderNumber(-n, "#,##0");
        if (n >= 0) return "ที่​" + this.renderNumber(n, "#,##0")
    }
}