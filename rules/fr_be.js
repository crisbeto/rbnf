module.exports = {
    "renderDigitsOrdinal": function anonymous(n) {
        if (n < 0) return this.renderDigitsOrdinal(-n);
        if (n >= 0) return this.renderDigitsOrdinalMasculine(n)
    },
    "renderDigitsOrdinalMasculine": function anonymous(n) {
        if (n < 0) return this.renderDigitsOrdinalMasculine(-n);
        if (n >= 0) return this.renderDordMascabbrev(n)
    },
    "renderDordMascabbrev": function anonymous(n) {
        if (n >= 2) return "e";
        if (n >= 1) return "er";
        if (n >= 0) return "e";

        return undefined;
    }
}