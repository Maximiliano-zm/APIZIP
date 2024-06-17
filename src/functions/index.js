import dataServices from './service/ZipService.js';
import { app } from "@azure/functions";

app.http('index', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {

        const json = request.query.get('json') || (await request.json());
        const respuesta = await dataServices(json);
        console.log(respuesta + "index")
        if (respuesta == undefined) {
            return {status: 400 , jsonBody: {error : "ocurrido error"}};
        } else {
            return { body: respuesta };
        }

    }
});

export default app;