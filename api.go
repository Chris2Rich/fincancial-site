package main

import (
	"fmt"
	"log"

	hdf5 "github.com/go-hdf5/hdf5"
)

func main() {
	tickers := [10]string{"stock1", "stock2", "stock3"}
	file, err := hdf5.OpenFile("timeseries.h5", hdf5.F_ACC_TRUNC)
	if err != nil {
		log.Fatalf("Error opening file: %v", err)
	}
	defer file.Close()
	fmt.Println("It Worked")
	return
}
