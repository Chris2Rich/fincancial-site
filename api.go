// package main

// import (
// 	"log"

// 	hdf5 "github.com/go-hdf5/hdf5"
// )

// func main() {
// 	tickers := []string{"stock1", "stock2", "stock3"}
// 	file, err := hdf5.Open("./data.h5")
// 	if err != nil {
// 		log.Panic("Failed to open data\n error: ", err)
// 	}
// 	defer file.Close()
// 	return
// }
