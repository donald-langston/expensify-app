import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => {
    return (
        <div>
        <ExpensesSummary />
        <ExpenseListFilters />
            <ExpenseList />
        </div>
    )
}

export default ExpenseDashboardPage;