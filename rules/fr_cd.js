module.exports = {
    "renderDigitsOrdinal": function anonymous(n) {

        return this.renderDigitsOrdinalMasculine(n)
    },
    "renderDigitsOrdinalMasculine": function anonymous(n) {

        return this.renderDordMascabbrev(n)
    },
    "renderDordMascabbrev": function anonymous(n) {
        if (n >= 2) return "e";
        if (n >= 1) return "er";
        return "e"
    }
}