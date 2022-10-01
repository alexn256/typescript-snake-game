docker image build . -t snake-ts:0.0.1

docker run --rm -d -p 80:80 snake-ts:0.0.1