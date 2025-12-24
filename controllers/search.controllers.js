export default {
    getSearch: async (req, reply) => {
        const q = req.query.query

        console.log( 'req.validationError3333', q )

        return { q }


        try {
            reply.send('Get test is controllers !!!', req.body)
        } catch(error) {
            reply.status(500).send(err)
        }

    },

    getAllUsers: async (req, reply) => {},
    // getUserById: async (req, reply) => { },
    // createUser: async (req, reply) => { },
    // updateUser: async (req, reply) => { },
    // deleteUser: async (req, reply) => { }
}

/*
export default class Find {
    #req = {}
    #reply = {}

    constructor(req, reply) {
        this.#req = req
        this.#reply = reply
    }

    async getSearch (req, reply) {
        const q = req.query.query

        console.log( 'exampleClass', req.validationError )
        return { q }
    }
}
*/
