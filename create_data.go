package main

import (
	"log"

	hdf5 "github.com/sbinet/go-hdf5"
)

func main() {
	tickers := []string{"stock1", "stock2", "stock3"}
	file, err := hdf5.CreateFile("./data.h5", hdf5.F_ACC_TRUNC)
	if err != nil {
		log.Panic("Failed to open data\n error: ", err)
	}
	for _, ticker := range tickers {
		group, err := file.CreateGroup(ticker)
		dataSpace, err := hdf5.CreateSimpleDataspace([]uint{100, 2, 1}, nil)
		dataType, err := hdf5.NewDatatypeFromType(float64(0))
		dataset, err := group.CreateDataset("order_book", dataType, dataSpace)
	}
	defer file.Close()
	return
}
