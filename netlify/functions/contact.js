exports.handler = async function (event) {

    // Only allow POST requests

    if (event.httpMethod !== "POST") {

        return {
            statusCode: 405,
            body: JSON.stringify({
                message: "Method not allowed"
            })
        };

    }


    try {

        const data = JSON.parse(event.body);


        const {
            name,
            email,
            subject,
            message
        } = data;


        // Validate data

        if (!name || !email || !subject || !message) {

            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "All fields are required."
                })
            };

        }


        // For now, display the received data
        // in Netlify function logs.

        console.log("New Contact Message:");

        console.log({
            name,
            email,
            subject,
            message
        });


        return {

            statusCode: 200,

            body: JSON.stringify({

                success: true,

                message:
                    "Your message has been received."

            })

        };


    } catch (error) {

        console.error(error);


        return {

            statusCode: 500,

            body: JSON.stringify({

                message:
                    "Server error."

            })

        };

    }

};
