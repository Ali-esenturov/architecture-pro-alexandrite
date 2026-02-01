const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-grpc');

const sdk = new NodeSDK({
  traceExporter: new OTLPTraceExporter({
    url: 'http://simplest-collector:4317'
  }),
  instrumentations: [getNodeAutoInstrumentations()],
  serviceName: 'service-b'
});

(async () => {
  try {
    await sdk.start();   // await вместо .then()
    console.log('Tracing initialized');
  } catch (err) {
    console.error('Error initializing tracing', err);
  }
})();
