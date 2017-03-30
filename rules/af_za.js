module.exports = {
    "renderDigitsOrdinal": function anonymous(n) {
        if (n < 0) return "−" + this.renderDigitsOrdinal(-n);
        if (n >= 0) return  this.renderDigitsOrdinalIndicator(n)
    },
    "renderDigitsOrdinalIndicator": function anonymous(n) {
        if (n >= 100) return this.renderDigitsOrdinalIndicator(n % 100);
        if (n >= 20) return "ste";
        if (n >= 2) return "de";
        if (n >= 1) return "ste";
        if (n >= 0) return "ste"
    }
}