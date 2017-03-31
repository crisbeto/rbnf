module.exports = {
    "renderDigitsOrdinal": function anonymous(n) {
        if (n < 0) return this.renderDigitsOrdinal(-n);
        if (n >= 0) return this.renderDigitsOrdinalIndicator(n)
    },
    "renderDigitsOrdinalIndicator": function anonymous(n) {
        if (n >= 0) return "'инчи"
    }
}