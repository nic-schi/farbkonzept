const begriffe = [
    {
        l: "Natürlich",
        r: "Unnatürlich"
    },
    {
        l: "Freundlich",
        r: "Unfreundlich"
    },
    {
        l: "Einladend",
        r: "Abstoßend"
    },
    {
        l: "Warm",
        r: "Kalt"
    },
    {
        l: "Ruhig",
        r: "Unruhig"
    },
    {
        l: "Aufregend",
        r: "Langweilig"
    },
    {
        l: "Modern",
        r: "Altmodisch"
    },
    {
        l: "Glücklich",
        r: "Traurig"
    },
    {
        l: "Frei",
        r: "Gefangen"
    },
    {
        l: "Erholend",
        r: "Anstrengend"
    },
    {
        l: "Ländlich",
        r: "Städtisch"
    },
    {
        l: "Nostalgisch",
        r: "Futuristisch"
    }
].sort((a, b) => {
    if (a.l > b.l) {
        return 1;
    } else if (b.l > a.l) {
        return -1;
    } else {
        return 0;
    }
});

const header = ["++", "+", "0", "-", "--"];

export {
    begriffe,
    header
}