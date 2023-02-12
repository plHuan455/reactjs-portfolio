import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { addZero, numberToMoney } from '../../../utils/funcs';
import Text from '~atoms/Text';
import Button from '~atoms/Button';
import { textOverflowMixin } from '../../../styles/mixins';
import MenuBase from '~organisms/MenuBase';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';

export interface PendingDetailTypes {
  id: string;
  content: string;
  money: number;
  bank: string;
  date: Date;
}

export interface PendingDetailProps {
  pendingList: PendingDetailTypes[];
  currDate: Date;
  onAddPendingClick: () => void;
  onDeleteClick?: (pendingId: string) => void;
  onUpdateClick?: (pendingId: string) => void;
}

const PendingDetail: React.FC<PendingDetailProps> = ({
  pendingList,
  currDate,
  onAddPendingClick,
  onDeleteClick,
  onUpdateClick,
}) => {
  const [pageSize, setPageSize] = useState<number>(20);

  const columns = useMemo<GridColDef[]>(() => {
    return [
      {
        field: 'stt',
        headerName: 'Stt',
        maxWidth: 50, 
        align: "center",
        headerAlign: 'center',
        renderCell: ({ value }) => (
          <Typography variant='body2' sx={{ width: '100%', textAlign: 'center' }}>
            {value}
          </Typography>
        )
      },
      {
        field: 'content',
        headerName: 'Nội dung',
        flex: 3,
        align: 'center',
        renderCell: ({ value }) => (
          <Typography 
          variant='body2' 
          sx={{ 
            width: '100%',
            ...textOverflowMixin(3)
            // ...test(2)
          }}>
            {value}
          </Typography>
        )
      },
      {
        field: 'money',
        headerName: 'Số tiền',
        flex: 2,
        align: 'center',
        renderCell: (params) => {
          return (
            <Typography
              variant='body2'
              sx={{
                color: params.value < 0 ? "rgb(220, 53, 69)" : "rgb(25, 135, 84)",
                fontWeight: 600,
                width: "100%",
              }}
            >
              {params.value > 0 ? `+${numberToMoney(params.value)}` : numberToMoney(params.value)}
            </Typography>
          )
        }
      },
      {
        field: 'bank',
        headerName: 'Nguồn tiền',
        flex: 2,
        align: 'center',
        renderCell: ({ value }) => (
          <Typography variant='body2' sx={{ width: '100%'}}>
            {value}
          </Typography>
        )
      },
      {
        field: 'time',
        headerName: 'Thời gian',
        flex: 1,
        align: 'center',
        renderCell: ({ value }) => (
          <Typography variant='body2' sx={{ width: '100%'}}>
            {value}
          </Typography>
        )
      },
      {
        field: 'menu',
        headerName: 'Hành động',
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        renderCell: ({ value }) => (
          <Box sx={{
            '& .MuiButton-root': {
              padding: (theme) => theme.spacing(4),
              margin: (theme) => theme.spacing(-4),
            },
            '& .MuiSvgIcon-root': {
              fontSize: (theme) => theme.spacing(16)
            }
          }}>
            <MenuBase 
              menuList={[
                {value: 'update', label: 'Cập nhật', icon: <UpdateIcon />},
                {value: 'delete', label: 'Xóa', icon: <DeleteIcon />},
              ]}
              onMenuItemClick={(optionValue) => {
                switch(optionValue) {
                  case 'update': return onUpdateClick && onUpdateClick(value);
                  case 'delete': return onDeleteClick && onDeleteClick(value)
                }
              }}
            />
          </Box>
        )
      },
    ]
  }, [pendingList]) 

  const rows = useMemo(() => {
    return pendingList.map((value, index) => ({
      id: value.id,
      stt: index,
      content: value.content,
      money: value.money,
      time: `${addZero(value.date.getHours())}:${addZero(value.date.getMinutes())}`,
      bank: value.bank,
      menu: value.id
    }))
  }, [pendingList])

  return (
    <Box className="t-pendingDetail">
      <Box>
        <div className="t-pendingManageCalendar_modal_title">
          <div className="t-pendingManageCalendar_modal_titleText">
            <Text type="h2" modifiers={['black', '24x28', '600', 'center']}>
              Danh sách chi tiêu
            </Text>
          </div>
          <div className="t-pendingManageCalendar_modal_titleButton">
            <Button modifiers={['14x16']} onClick={() => { onAddPendingClick && onAddPendingClick() }} variant='pendingManager'>+ Thêm</Button>
          </div>
        </div>
        <div className="t-pendingManageCalendar_date">
          <Text type="h2" modifiers={['lightSlateGray', '20x24', '600', 'center']}>
            {`(${addZero(currDate.getDate())}/${addZero(currDate.getMonth() + 1)}/${currDate.getFullYear()})`}
          </Text>
        </div>
      </Box>

      <Box
        sx={{
          height: 480,
          width: '100%',
          "& .MuiDataGrid-columnHeaderTitle": { fontWeight: 600 },
          mt: (theme) => theme.spacing(12),
          '& .MuiDataGrid-renderingZone': {
            maxHeight: 'none !important',
          },
          "& .MuiDataGrid-root .MuiDataGrid-cell": {
            whiteSpace: "normal !important",
            maxHeight: "none !important",
            textOverflow: 'ellipsis',
            display: 'flex',
            alignItems: "flex-start",
            py: (theme) => theme.spacing(12),
            minHeight: '12px !important',
          },
          '& .MuiDataGrid-row': {
            maxHeight: 'none !important',
            minHeight: 'unset !important',
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          rowHeight={38}
          disableSelectionOnClick
          rowsPerPageOptions={[5, 10, 20]}
          page={0}
          pagination
          pageSize={pageSize}
          experimentalFeatures={{ newEditingApi: true }}
          onPageSizeChange={(size) => setPageSize(size)}
          onPageChange={(page) => {}                              }
        />
      </Box>
    </Box>
  )
};

export default PendingDetail;

