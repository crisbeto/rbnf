{
    "renderDigitsOrdinal": function anonymous(n) {
        if (n < 0) return "−" + this.renderDigitsOrdinal(-n);
        if (n >= 0) return this.renderNumber(n, "#,##0") + this.renderDigitsOrdinalIndicator(n)
    },
    "renderDigitsOrdinalIndicator": function anonymous(n) {
        if (n >= 0) return "'инчи"
    }
}