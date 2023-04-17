/// <reference types="cypress" />

describe("check status code", () => {
  it("response code should be 200", () => {
    cy.request("https://httpbin.org").then((response) => {
      const status = response.status;
      assert.equal(200, status);
    });
  });
});

describe("GET method", () => {
  const request = {
    method: "GET",
    url: "https://httpbin.org/get",
    failOnStatusCode: false,
  };

  it("response code should be 200", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
    });
  });
});

describe("GET method duration", () => {
  const request = {
    method: "GET",
    url: "https://httpbin.org/get",
    failOnStatusCode: false,
  };
  it("test duration", () => {
    cy.request(request).then((response) => {
      assert.isTrue(response.duration <= 500);
    });
    cy.log("Request duration is correct.");
  });
});

describe("POST method", () => {
  const request = {
    method: "POST",
    url: "https://httpbin.org/post",
    failOnStatusCode: false,
  };

  it("response code should be 200", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
    });
  });
});

describe("PUT method", () => {
  const request = {
    method: "PUT",
    url: "https://httpbin.org/put",
    failOnStatusCode: false,
  };

  it("response code should be 200", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
    });
  });
});

describe("DELETE method", () => {
  const request = {
    method: "DELETE",
    url: "https://httpbin.org/delete",
    failOnStatusCode: false,
  };

  it("response code should be 200", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
    });
  });
});

describe("Header set", () => {
  const request = {
    method: "GET",
    url: "https://httpbin.org/headers",
    headers: {
      customHeader: "customValue",
    },
    failOnStatusCode: false,
  };

  it("header set should be correctly", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.equal("customValue", response.requestHeaders.customHeader);
    });
  });
});

describe("User-agent set", () => {
  const request = {
    method: "GET",
    url: "https://httpbin.org/headers",
    headers: {
      "user-agent": "My test user-agent",
    },
    failOnStatusCode: false,
  };

  it("User-agent set should be correctly", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.equal("My test user-agent", response.requestHeaders["user-agent"]);
    });
  });
});

describe("Cookies", () => {
  const request = {
    method: "GET",
    url: "https://httpbin.org/headers",
    headers: {
      Cookie: "cookieName=cookieValue",
    },
    failOnStatusCode: false,
  };

  it("Cookie should be send", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.equal("cookieName=cookieValue", response.requestHeaders["Cookie"]);
    });
  });
});

describe("Random identifications", () => {
  it("Random identifications", () => {
    for (let i = 0; i < 5; i++) {
      const randomId = getRandomInt(10000);

      const request = {
        url: "https://httpbin.org",
        id: randomId,
      };

      cy.request(request).then((response) => {
        assert.isTrue(response.status == 200);
      });
    }
  });
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
