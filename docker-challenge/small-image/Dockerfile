FROM golang:1.16-alpine AS builder

WORKDIR /app

COPY hellofc.go ./

RUN go build -ldflags "-s -w" hellofc.go

# -------------- otimization -------------------
FROM scratch

COPY --from=builder /app/hellofc /hello

CMD [ "/hello" ]
