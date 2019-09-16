import React, { Component } from 'react';
import defaultStyles from "./tableLight.module.css"
import { Grid, Table, TableHead, TableRow, TableBody, TableCell } from "@material-ui/core";
import Image from '../../ui/imageUploader/image';

export default function table(Props) {
    let props = { ...Props }
    props.styles = props.styles ? props.styles : defaultStyles

    return (
        <Table className={props.styles.root}>
            <TableHead>
                <TableRow>{renderTableHeader(props.TableHeaders, props)}</TableRow>
            </TableHead>

            <TableBody>
                {props.tableData.map((e, i) => (
                    <TableRow>{renderTableCells(e, i, props)}</TableRow>
                ))}
            </TableBody>
        </Table>
    )
}


//table header genareting function

const renderTableHeader = (headerArray, props) => {
    let tableCells = [];
    // headerArray.forEach((e, i) => {
    //     tableCells.push(
    //         <TableCell key={i} className={props.styles.tableCell}>
    //             {e}
    //         </TableCell>
    //     );
    // });
    return tableCells;
}

//table body genareting function


const renderTableCells = (obj, i, props) => {
    let tableCells = [];
    let v = null;
    for (let element in obj) {
        if (element.toLowerCase().includes("image"))
            v = (
                <TableCell className={props.styles.tableCell}>
                    {renderTableImages(obj[element], i, props, true)}
                </TableCell>
            )
        else {
            if (element === "color") {
                v = (
                    <TableCell className={props.styles.tableCell}>
                        <div style={{
                            backgroundColor: obj[element],
                            height: "25px",
                            width: "25px",
                            borderRadius: "50%"
                        }} />{" "}
                    </TableCell>
                )
            }
            else
                v = <tableCells className={props.styles.tableCell}>{obj[element]}</tableCells>
        }
        tableCells.push(v);
    }

    return tableCells;

}
//table images in a table cell generating functions
const renderTableImages = (images, index, props, file) => {
    if (images.length > 1)
        return (
            <Grid container style={{ height: "120px", width: "120px", oberflow: "auto", border: "1px solid rgb(134,134,,134" }} spacing={12}>
                {images.map((e, i) => {
                    return (
                        <Grid item xs={6}>
                            <Image url={e}
                                deleteImage={() => props.deleteImage(index, i)}
                                height={50}
                                width={50}
                                file={file}
                            />
                        </Grid>
                    )
                })}
            </Grid>

        );
    else if (images.length === 1)
        return (
            <Image url={images[0]} deleteImage={() => props.deleteImage(index, 0)} />
        );
    else return <p style={{ color: "red" }}>No Image</p>
} 