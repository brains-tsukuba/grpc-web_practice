node /dist/index.js &
envoy -c /envoy.yaml --service-cluster backend