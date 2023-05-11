/**
 * @NApiVersion 2.1
 * @NScriptType Restlet
 */
define(['N/record', 'N/search', 'N/email', 'N/render', 'N/transaction'],
    /**
     * @param{record} record
     * @param{search} search
     * @param{email} email
     * @param{render} render
     * @param{transaction} transaction
     */
    (record, search, email,render, transaction) => {
        /**
         * Defines the function that is executed when a GET request is sent to a RESTlet.
         * @param {Object} requestParams - Parameters from HTTP request URL; parameters passed as an Object (for all supported
         *     content types)
         * @returns {string | Object} HTTP response body; returns a string when request Content-Type is 'text/plain'; returns an
         *     Object when request Content-Type is 'application/json' or 'application/xml'
         * @since 2015.2
         */
        const get = (requestParams) => {
            log.debug('Received GET request: ', JSON.stringify(requestParams));
            var resObj = {
                status: "",
                msg:"Saludos desde NetSuite!"
            }
            return resObj;
        }

        /**
         * Defines the function that is executed when a PUT request is sent to a RESTlet.
         * @param {string | Object} requestBody - The HTTP request body; request body are passed as a string when request
         *     Content-Type is 'text/plain' or parsed into an Object when request Content-Type is 'application/json' (in which case
         *     the body must be a valid JSON)
         * @returns {string | Object} HTTP response body; returns a string when request Content-Type is 'text/plain'; returns an
         *     Object when request Content-Type is 'application/json' or 'application/xml'
         * @since 2015.2
         */
        const put = (requestBody) => {
            log.debug('Received PUT request: ', JSON.stringify(requestBody));
        }

        /**
         * Defines the function that is executed when a POST request is sent to a RESTlet.
         * @param {string | Object} requestBody - The HTTP request body; request body is passed as a string when request
         *     Content-Type is 'text/plain' or parsed into an Object when request Content-Type is 'application/json' (in which case
         *     the body must be a valid JSON)
         * @returns {string | Object} HTTP response body; returns a string when request Content-Type is 'text/plain'; returns an
         *     Object when request Content-Type is 'application/json' or 'application/xml'
         * @since 2015.2
         */
        const post = (requestBody) => {

            try {

               log.debug('requestBody en string',JSON.stringify(requestBody));
               var pesoSucio = requestBody.reading;
               log.debug("pesoSucio",pesoSucio);
               var partes = pesoSucio.split(":");
               var peso = partes[1];
               log.debug("peso",peso);

                var resObj = {
                    status: "",
                    msg:"Saludos desde NetSuite!"
                }
                return resObj;


            } catch (error) {
                log.error('POST Error',error);
            }


        }

        /**
         * Defines the function that is executed when a DELETE request is sent to a RESTlet.
         * @param {Object} requestParams - Parameters from HTTP request URL; parameters are passed as an Object (for all supported
         *     content types)
         * @returns {string | Object} HTTP response body; returns a string when request Content-Type is 'text/plain'; returns an
         *     Object when request Content-Type is 'application/json' or 'application/xml'
         * @since 2015.2
         */
        const doDelete = (requestParams) => {
            log.debug('Received DELETE request: ', JSON.stringify(requestParams));
        }




        return {get, put, post, delete: doDelete}

    });
