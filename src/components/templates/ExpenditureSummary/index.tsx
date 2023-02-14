import { Box, Typography } from '@mui/material';
import React from 'react';
import Container from '~organisms/Container';
import { numberToMoney } from '../../../utils/funcs';

export interface ExpenditureSummaryProps {
  date: Date;
  income: number;
  expenses: number;
}

const ExpenditureSummary: React.FC<ExpenditureSummaryProps> = ({
  date,
  income,
  expenses,
}) => {
  return (
    <Box
      className="t-expenditureSummary"
      sx={{
        '& .t-expenditureSummary_summary': {
          display: 'flex',

          '& .t-expenditureSummary_summary_money': {
            ml: (theme) => theme.spacing(4),
            fontWeight: 600
          }
        }
      }}
    >
      <Container>
        <Box sx={{ backgroundColor: 'white', py: (theme) => theme.spacing(16), px: (theme) => theme.spacing(8), borderRadius: (theme) => theme.spacing(8) }}>
          <Typography sx={{ fontSize: (theme) => theme.spacing(18), fontWeight: 600 }} variant='h3'>
            {`Tổng kết chi tiêu tháng ${date.getMonth() + 1} ${date.getFullYear()}`}
          </Typography>
          <Box sx={{mt: (theme)=> theme.spacing(12)}}>
            <Box className='t-expenditureSummary_summary'>
              <Typography>Tổng thu nhập: </Typography>
              <Typography className="t-expenditureSummary_summary_money" sx={{color:'#198754'}}>{numberToMoney(income)}</Typography>
            </Box>
            <Box className='t-expenditureSummary_summary'>
              <Typography>Tổng chi tiêu: </Typography>
              <Typography className="t-expenditureSummary_summary_money" sx={{color:'#DC3545'}}>{numberToMoney(expenses)}</Typography>
            </Box>

            <Box className='t-expenditureSummary_summary' sx={{mt: (theme) => theme.spacing(8)}}>
              <Typography>Tổng kết: </Typography>
              <Typography 
                className="t-expenditureSummary_summary_money" 
                sx={{color:income + expenses < 0 ? '#DC3545' : '#198754'}}
              >
                {numberToMoney(income + expenses)}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
};

export default ExpenditureSummary;

