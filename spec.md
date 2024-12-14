online market simulation/game to test sellside/buyside code
# api v0
every minute create a new "block" containing pending transactions
messages to server during block add to queue
every minute block contents are evaluated and valid orders get executed
price and block are stored to disk