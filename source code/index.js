const axios = require('axios');

class testmycms {
    constructor(apiKey, apiEndpoint) {
        this.apiKey = apiKey;
        this.apiEndpoint = apiEndpoint;
        this.projectID = projectID;
    }

    async authenticate() {
        try {
            const response = await axios.post(this.apiEndpoint, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`
                }
            });

            if (response.data.success) {
                console.log('Authentication successful');
                return response.data;
            } else {
                throw new Error('Authentication failed');
            }
        } catch (error) {
            console.error('Error during authentication:', error.message);
            throw error;
        }
    }
}

module.exports = testmycms;
