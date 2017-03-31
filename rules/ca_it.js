module.exports = {
    "renderDigitsOrdinal": function anonymous(n) {
        if (n < 0) return this.renderDigitsOrdinal(-n);
        if (n >= 0) return this.renderDigitsOrdinalMasculine(n)
    },
    "renderDigitsOrdinalMasculine": function anonymous(n) {
        if (n < 0) return this.renderDigitsOrdinalMasculine(-n);
        if (n >= 0) return this.renderDigitsOrdinalIndicatorM(n)
    },
    "renderDigitsOrdinalIndicatorM": function anonymous(n) {
        if (n >= 100) return this.renderDigitsOrdinalIndicatorM(n % 100);
        if (n >= 20) return this.renderDigitsOrdinalIndicatorM(n % 10);
        if (n >= 5) return "è";
        if (n >= 4) return "t";
        if (n >= 3) return "r";
        if (n >= 2) return "n";
        if (n >= 1) return "r";
        if (n >= 0) return "è"
    }
}