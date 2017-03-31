{
    "renderDigitsOrdinal": function anonymous(n) {
        if (n < 0) return "−" + this.renderDigitsOrdinal(-n);
        if (n >= 0) return this.renderDigitsOrdinalMasculine(n)
    },
    "renderDigitsOrdinalMasculine": function anonymous(n) {
        if (n < 0) return "−" + this.renderDigitsOrdinalMasculine(-n);
        if (n >= 0) return this.renderNumber(n, "#,##0") + this.renderDordMascabbrev(n)
    },
    "renderDordMascabbrev": function anonymous(n) {
        if (n >= 0) return "º"
    }
}