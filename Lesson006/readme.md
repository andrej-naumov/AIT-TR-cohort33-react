

1. Start local server with Java: java -jar SparkPostRequest.jar
2. Start "Go Live"
3. Send form to http://localhost:4567/contact and see server output

have a nice day!

Java-Source:
---

package org.example;

import lombok.extern.slf4j.Slf4j;

import static spark.Spark.get;
import static spark.Spark.post;

@Slf4j
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        get("/hello", (req, res) -> "Hello, world");

        get("/hello/:name", (req, res) -> {
            return "Hello, " + req.params(":name");
        });

        post("/contact", (req, res) -> {
            String name = "";
            String phone = "";
            String email = "";
            String location = "";
            String message = "";
            String agree = "";

            try {
                name = req.queryParams("name");
                phone = req.queryParams("phone");
                email = req.queryParams("email");
                location = req.queryParams("location");
                message= req.queryParams("message");
                agree= req.queryParams("agree");
            } catch (Exception e) {
                log.error(e.getMessage());
            }

            return "<br><hr><br>name=" + name +
                    "<br>phone=" + phone +
                    "<br>email=" + email +
                    "<br>location=" + location +
                    "<br>message=" + message +
                    "<br>agree=" + agree;
        });
    }
}

