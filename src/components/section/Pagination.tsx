import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

interface PaginationProps {
    currentPage: number,
    totalPages: number,
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({currentPage, totalPages, onPageChange}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={[styles.pageButton, styles.edgeButton, currentPage === 1 && styles.disabledButton]}
        onPress={() => {onPageChange(1);
        }}
        disabled={currentPage === 1}>
            <Text style={styles.buttonText}>Premier</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
      style={[styles.pageButton, currentPage === 1 && styles.disabledButton]}
      onPress={() => {onPageChange(currentPage - 1)}}
      disabled={currentPage === 1}
      >
        <Text style={styles.buttonText}>Précedent</Text>
      </TouchableOpacity>

      <View style={styles.pageIndicator}>
        <Text style={styles.pageText}>{currentPage} / {totalPages}</Text>
      </View>

      <TouchableOpacity
      style={[styles.pageButton, currentPage === totalPages && styles.disabledButton]}
      onPress={() => {onPageChange(currentPage + 1)}}
      disabled={currentPage === totalPages}
      >
        <Text style={styles.buttonText}>Suivant</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={[styles.pageButton, styles.edgeButton, currentPage === 1 && styles.disabledButton]}
        onPress={() => {onPageChange(totalPages);
        }}
        disabled={currentPage === totalPages}>
            <Text style={styles.buttonText}>Dernier</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    pageButton: {
        backgroundColor: '#FF6B6B',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        marginHorizontal: 4,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    edgeButton : {
        backgroundColor: '#5D5FEF', 
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 12,
    },
    disabledButton : {
        backgroundColor: '#ccc',
        elevation:0
    },
    pageIndicator : {
        backgroundColor: '#F9F9F9',
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 20,
        marginHorizontal: 6,
        borderWidth: 1,
        borderColor: '#EEE'
    }, 
    pageText: {


    }
})

export default Pagination