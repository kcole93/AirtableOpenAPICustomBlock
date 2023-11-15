# AirtableOpenAPICustomBlock
Create an OpenAPI specification for a given Airtable base using Airtable's Custom Blocks platform. Then, use this specification to power Actions for your Custom GPTs in OpenAI.

This code was forked from and almost entirely created by GitHub user [TheF1rstPancake](https://github.com/TheF1rstPancake/). I've only fixed an issue with a missing polyfill in more recent versions of Webpack, as well as added support for generating an `operationId` for each path so that OpenAI's Schema validator is happy.

## Disclaimer
By default, the OpenAPI specification created includes **all CRUD operations** in the Airtable base where the extension is installed. By supplying the entire schema to the OpenAI Action creator, *you'll be providing your custom GPT with full CRUD operation capabilities*. 

If this is not your intention, be sure to remove any destructive path methods (PUT, PUSH, PATCH, DELETE) from the produced specification. You can, and should, also prevent unwanted operations by limiting the scope of the Personal Access Token provided to the OpenAI Action.
