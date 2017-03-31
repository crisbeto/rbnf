module.exports = {
    "renderDigitsOrdinal": function anonymous(n) {

        return this.renderDigitsOrdinalIndicator(n)
    },
    "renderDigitsOrdinalIndicator": function anonymous(n) {
        if (n >= 100) return this.renderDigitsOrdinalIndicator(n % 100);
        if (n >= 20) return "ste";
        if (n >= 2) return "de";
        if (n >= 1) return "ste";
        return "ste"
    }
}