package com.donation.donations.item;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Service
public class ItemService {

    public List<Item> getItem(){
        return List.of(
                new Item( 1L,"beans", 1, "Halal", LocalDate.of(2020, Month.JULY, 1 )
                ));
    }
}
