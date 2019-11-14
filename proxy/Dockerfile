 
FROM envoyproxy/envoy-dev:latest
COPY envoy.yaml /etc/front-envoy.yaml
RUN apt-get update && apt-get -q install -y \
    curl
EXPOSE 80
CMD /usr/local/bin/envoy -c /etc/front-envoy.yaml --service-cluster proxy