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

    Unauthorized: (res) => {
        res.statusMessage = "Non-autoris√©";
        res.status(403).end();
    },

    Unauthenticated: (res) => {
        res.statusMessage = "Non-authentifi√©";
        res.status(401).end();
    }
}