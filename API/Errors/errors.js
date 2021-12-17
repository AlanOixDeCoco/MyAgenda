module.exports = {
    NotFound: (res, data) => {
        res.statusMessage = data + " Not Found";
        res.status(404).end();
    },

    BadSyntax: (res) => {
        res.statusMessage = "Bad syntax";
        res.status(400).end();
    },

    BadRequest: (res) => {
        res.statusMessage = "Bad request";
        res.status(400).end();
    },

    Unauthorized: () => {
        res.statusMessage = "Non-autorisé";
        res.status(403).end();
    },

    Unauthenticated: () => {
        res.statusMessage = "Non-authentifié";
        res.status(401).end();
    }
}