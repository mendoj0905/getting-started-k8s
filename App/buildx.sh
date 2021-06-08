docker buildx build \
--platform linux/arm64/v8,linux/amd64 \
--tag jujubeee314/hello-nodejs .  \
--push