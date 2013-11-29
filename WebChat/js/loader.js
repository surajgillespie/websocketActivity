requirejs.config({
    baseUrl: "lib",
    paths: {
        activity: "../js",
	//server:"../lib/chat-server"
    }
});

requirejs(["activity/activity"]);
