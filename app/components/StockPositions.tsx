"use client";
import React from 'react';
import positionTree from '../../ts_position_tree.json'; // replace with any json file you want to display the data of
import { Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell } from "@nextui-org/table";

type position = {
    Quantity: number,
    Ask: number,
    Bid: number,
    Last: number,
    Mark: number,
    MarketValue: number,
    CostBasis: number,
    CostPrice: number,
    UnrealizedProfitLoss: number,
    UnrealizedProfitLossPercent: number,
    TodaysProfitLoss: number
}

interface Props {
    symbol: string;
}

const columns: string[] = ["Symbol/Quantity", "Ask", "Bid", "Last", "Mark", "Market Value", "Cost Basis", "Cost Price", "Unrealized Profit Loss", "Unrealized Profit Loss Percent", "Today's Profit Loss"];

const StockPositions = ({ symbol }: Props) => {
    let positionTreeString = JSON.stringify(positionTree);
    const positions = JSON.parse(positionTreeString);
    // potential future improvement: read in positionTree data just once in StockPositionsList and pass it to this component

    const currentSymbolKeys: string[] = Object.keys(positions[symbol]);
    console.log("post: ", currentSymbolKeys);
    console.log("bleh: ", positions[symbol][currentSymbolKeys[0]].Quantity)

    return (
        <Table aria-label="Example table with dynamic content">
        <TableHeader>
            {columns.map((column) =>
            <TableColumn key={column}>{column}</TableColumn>
            )}
        </TableHeader>
        <TableBody>
            {currentSymbolKeys.map((row) =>
            <TableRow key={row}>
                <TableCell>
                    <p className='text-base'><b>{row}</b></p>
                    <p className={positions[symbol][row].Quantity < 0 ? 'text-red-500' : 'text-green-500'}>
                        {positions[symbol][row].Quantity > 0 ? "+" + positions[symbol][row].Quantity : positions[symbol][row].Quantity}
                    </p>
                </TableCell>
                <TableCell>{positions[symbol][row].Ask}</TableCell>
                <TableCell>{positions[symbol][row].Bid}</TableCell>
                <TableCell>{positions[symbol][row].Last}</TableCell>
                <TableCell>{positions[symbol][row].Mark}</TableCell>
                <TableCell>{positions[symbol][row].MarketValue}</TableCell>
                <TableCell>{positions[symbol][row].CostBasis}</TableCell>
                <TableCell>{positions[symbol][row].CostPrice}</TableCell>
                <TableCell>{positions[symbol][row].UnrealizedProfitLoss}</TableCell>
                <TableCell>{positions[symbol][row].UnrealizedProfitLossPercent}</TableCell>
                <TableCell>{positions[symbol][row].TodaysProfitLoss}</TableCell>
            </TableRow>
            )}
        </TableBody>
        </Table>
    )
}

export default StockPositions;