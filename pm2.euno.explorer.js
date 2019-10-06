module.exports = {
    apps : [
        {
            name: "euno_explorer",
            script: "node --stack-size=10000 ./bin/cluster",
            watch: false,
            env: {
                "NODE_ENV": "production"
            }
        }
    ]
}