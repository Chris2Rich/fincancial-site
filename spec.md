online market simulation/game to test sellside/buyside code
# api v0
every minute create a new "block" containing pending transactions
messages to server during block add to queue
every minute block contents are evaluated and valid orders get executed
price and block are stored to disk

data defined by hdf5 {100, 2, n} array where there are 100 prices every minute (first 32 bytes for number of shares, last 32 bytes for price (2 dp)) there is 1 column for buy and one for sell and then n ticks per share 