{
    "renderDigitsOrdinal": function anonymous(n) {
        if (n < 0) return "−" + this.renderDigitsOrdinal(-n);
        if (n >= 0) return "ទី" + this.renderNumber(n, "#,##0")
    }
}