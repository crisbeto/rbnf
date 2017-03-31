module.exports = {
    "renderDigitsOrdinal": function anonymous(n) {
        if (n < 0) return this.renderDigitsOrdinal(-n);
        if (n >= 2) return " lia";
        if (n >= 1) return " tɔ";
        if (n >= 0) return " lia"
    }
}