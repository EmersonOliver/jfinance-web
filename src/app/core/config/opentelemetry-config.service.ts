import { Injectable } from '@angular/core';
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { XMLHttpRequestInstrumentation } from '@opentelemetry/instrumentation-xml-http-request';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
@Injectable({
  providedIn: 'root'
})
export class OpentelemetryConfigService {

  constructor() {
    this.setupOpenTelemetry();
  }
  private setupOpenTelemetry() {
    // Configura o exportador OTLP
    const traceExporter = new OTLPTraceExporter({
      url: 'http://localhost:16686/v1/traces', // Altere para o endpoint do seu Collector
    });

    // Configura o provider de rastreamento com metadados do serviço
    const provider = new WebTracerProvider({
      resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: 'angular-app',
      }),
    });

    // Configura o span processor para enviar dados para o Collector
    provider.addSpanProcessor(new BatchSpanProcessor(traceExporter));
    provider.register();

    // Configura a instrumentação para monitorar requisições HTTP
    registerInstrumentations({
      instrumentations: [new XMLHttpRequestInstrumentation()],
    });
  }

}
