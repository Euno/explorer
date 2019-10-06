module.exports = {
    apps : [
        {
            name: "euno_explorer",
            script: "npm run start",
            watch: false,
            env: {
                "NODE_ENV": "production"
            }
        }
    ]
}