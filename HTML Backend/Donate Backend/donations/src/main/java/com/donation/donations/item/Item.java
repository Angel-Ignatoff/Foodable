package com.donation.donations.item;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
public class Item {
    @Id
    @SequenceGenerator(
            name = "item_sequence",
            sequenceName = "item_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "item_sequence"
    )
    private Long id;
    private String name;
    private Integer quantity;
    private String dietary;
    private LocalDate bestbefore;

    public Item() {
    }

    public Item(Long id, String name, Integer quantity, String dietary, LocalDate bestbefore) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.dietary = dietary;
        this.bestbefore = bestbefore;
    }

    public Item(String name, Integer quantity, String dietary, LocalDate bestbefore) {
        this.name = name;
        this.quantity = quantity;
        this.dietary = dietary;
        this.bestbefore = bestbefore;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getDietary() {
        return dietary;
    }

    public void setDietary(String dietary) {
        this.dietary = dietary;
    }

    public LocalDate getBestbefore() {
        return bestbefore;
    }

    public void setBestbefore(LocalDate bestbefore) {
        this.bestbefore = bestbefore;
    }

    @Override
    public String toString() {
        return "Item{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", quantity=" + quantity +
                ", dietary='" + dietary + '\'' +
                ", bestbefore=" + bestbefore +
                '}';
    }
}
