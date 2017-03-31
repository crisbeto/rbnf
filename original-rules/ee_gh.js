{
    "renderDigitsOrdinal": function anonymous(n) {
        if (n < 0) return "−" + this.renderDigitsOrdinal(-n);
        if (n >= 2) return this.renderNumber(n, "#,##0") + " lia";
        if (n >= 1) return this.renderNumber(n, "#,##0") + " tɔ";
        if (n >= 0) return this.renderNumber(n, "#,##0") + " lia"
    }
}