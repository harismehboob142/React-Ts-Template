import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Loader } from "@mantine/core";
// import "./style.css";
export function MyComponent({
  data,
  columns,
  isLoading,
  pagination,
  selectableRows,
  handleNavigate,
  getSelectedRows,
  rowClickFunctionality,
}: {
  data: any;
  columns: any;
  isLoading?: boolean;
  pagination?: boolean;
  selectableRows?: any;
  getSelectedRows?: (rows: any) => void;
  rowClickFunctionality?: boolean;
  handleNavigate?: (e: any) => void;
}) {
  const navigate = useNavigate();

  const customStyles: any = {
    table: {
      style: {
        // border: "1px solid #E0E0E0", // Adds an outer border to the table
      },
    },
    rows: {
      style: {
        borderRadius: "8px",
        backgroundColor: "#E2EBEF",
        marginTop: "5px",
        marginBottom: "5px",
      },
    },
    headCells: {
      style: {
        fontWeight: 700,
        fontSize: "13px",
        width: 170,
        textAlign: "center",
        background: "transparent",

        // borderRight: "1px solid #E0E0E0",
        // borderBottom: "1px solid #E0E0E0", // Make sure the bottom border of the header cells is also defined, if not already
      },
    },
    cells: {
      style: {
        textAlign: "center",
        align: "center",
        marginLeft: "auto",
        marginRight: "auto",
        // marginTop: "5px",
        // marginBottom: "5px",
        // borderRight: "1px solid #E0E0E0",
        // borderBottom: "1px solid #E0E0E0", // Ensure cells have a bottom border for consistency
      },
    },
    pagination: {
      style: {
        display: "flex",
        justifyContent: "center", // Align pagination controls to the center
        alignItems: "center",
        color: "black",
        fontWeight: 600,
        fontSize: "13px",
        minHeight: "56px",
        // backgroundColor: "red",
        // borderTopStyle: "solid",
        // borderTopWidth: "1px",
        // borderTopColor: "green",
      },
    },
  };

  const handleRowClick = (e: any) => {
    handleNavigate
      ? handleNavigate(e)
      : navigate(
          `${
            window.location.pathname === "/"
              ? "admin"
              : window.location.pathname
          }/${e.id || e.userId}`
        );
  };
  const customPagination = {
    rowsPerPageText: "Rows Per Page",
    rangeSeparatorText: "of",
    // selectAllRowsItem: true,
    selectAllRowsItemText: "",
  };
  return (
    <div className="table-wrapper">
      <DataTable
        paginationIconNext={<IconChevronRight />}
        paginationIconPrevious={<IconChevronLeft />}
        paginationIconFirstPage={<></>}
        paginationIconLastPage={<></>}
        paginationComponentOptions={customPagination}
        data={data}
        progressPending={isLoading}
        progressComponent={<Loader />}
        responsive={true}
        // highlightOnHover
        columns={columns}
        customStyles={customStyles}
        selectableRows={selectableRows}
        pagination={pagination === false ? pagination : true}
        paginationRowsPerPageOptions={[5, 10, 15]}
        onRowClicked={rowClickFunctionality ? handleRowClick : undefined}
        onSelectedRowsChange={
          selectableRows ? (e) => getSelectedRows(e) : undefined
        }
      />
    </div>
  );
}
export default MyComponent;
