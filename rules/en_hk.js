module.exports = {
    "renderDigitsOrdinal": function anonymous(n) {

        return this.renderDigitsOrdinalIndicator(n)
    },
    "renderDigitsOrdinalIndicator": function anonymous(n) {
        if (n >= 100) return this.renderDigitsOrdinalIndicator(n % 100);
        if (n >= 20) return this.renderDigitsOrdinalIndicator(n % 10);
        if (n >= 4) return "th";
        if (n >= 3) return "rd";
        if (n >= 2) return "nd";
        if (n >= 1) return "st";
        return "th"
    }
}